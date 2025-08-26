const fs = require('fs');
const path = require('path');

// --- Configuration Paths ---
const VALUES_PATH = path.join(__dirname, 'config', 'values.json');
const TEMPLATE_PATH = path.join(__dirname, 'config', 'settings.template.json');
const OUTPUT_PATH = path.join(__dirname, '.gemini', 'settings.json');

// --- Main Function ---
function generateConfig() {
  // 1. Read and parse values and template files
  let values;
  let template;

  try {
    const valuesFile = fs.readFileSync(VALUES_PATH, 'utf8');
    values = JSON.parse(valuesFile);
  } catch (error) {
    console.error(`\x1b[31mError: Could not read or parse '${VALUES_PATH}'.\x1b[0m`);
    console.error(`Please make sure the file exists and is valid JSON. You can create it from 'config/values.example.json'.`);
    process.exit(1);
  }

  try {
    template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  } catch (error) {
    console.error(`\x1b[31mError: Could not read template file '${TEMPLATE_PATH}'.\x1b[0m`);
    process.exit(1);
  }

  // 2. Build dynamic arguments for 'filesystem', 'git', and 'figma'
  const fullProjectPaths = values.paths.project_names.map(name => 
    path.join(values.paths.projects_base, name).replace(/\\/g, '/') // Ensure forward slashes for cross-platform compatibility
  );

  const filesystemArgs = ['-y', '@modelcontextprotocol/server-filesystem', ...fullProjectPaths];
  
  const gitArgs = ['mcp-server-git'];
  fullProjectPaths.forEach(projPath => {
    gitArgs.push('--repository', projPath);
  });

  const figmaArgs = [
    '-y',
    'figma-developer-mcp',
    `--figma-api-key=${values.secrets.figma_api_key}`,
    '--stdio',
  ];

  // 3. Perform replacements
  let output = template
    .replace('"__FILESYSTEM_ARGS__"', JSON.stringify(filesystemArgs))
    .replace('"__GIT_ARGS__"', JSON.stringify(gitArgs))
    .replace('"__FIGMA_ARGS__"', JSON.stringify(figmaArgs))
    .replace('__UVX_EXECUTABLE_PATH__', values.paths.uvx_executable.replace(/\\/g, '/'))
    .replace('__BRAVE_API_KEY__', values.secrets.brave_api_key)
    .replace('__JIRA_USERNAME__', values.secrets.jira_username)
    .replace('__JIRA_API_TOKEN__', values.secrets.jira_api_token)
    .replace('__NOTION_API_TOKEN__', values.secrets.notion_api_token);

  // 4. Write the final config file
  try {
    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, output, 'utf8');
    console.log(`\x1b[32mSuccessfully generated '${OUTPUT_PATH}'!\x1b[0m`);
  } catch (error) {
    console.error(`\x1b[31mError: Could not write final config to '${OUTPUT_PATH}'.\x1b[0m`);
    console.error(error);
    process.exit(1);
  }
}

// --- Run the script ---
generateConfig();
