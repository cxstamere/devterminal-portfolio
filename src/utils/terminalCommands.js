
// Available commands and their responses
const commands = {
  help: () => {
    return `
      <span class="keyword">Available commands:</span>
      <br/><span class="function">about</span> - Learn about me
      <br/><span class="function">skills</span> - View my technical skills
      <br/><span class="function">projects</span> - Browse my projects
      <br/><span class="function">contact</span> - Get in touch with me
      <br/><span class="function">experience</span> - View my work experience
      <br/><span class="function">education</span> - View my education background
      <br/><span class="function">clear</span> - Clear the terminal
      <br/><span class="function">social</span> - View my social media links
      <br/><span class="function">resume</span> - Download my resume
      <br/><span class="function">help</span> - Show this help message
    `;
  },

  about: () => {
    return `
      <span class="keyword">const</span> <span class="variable">developer</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"John Doe"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"title"</span>: <span class="string">"Full Stack Developer"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"location"</span>: <span class="string">"San Francisco, CA"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"bio"</span>: <span class="string">"I'm a passionate web developer with a strong focus on creating intuitive and efficient web applications. I love solving complex problems and turning ideas into reality through code."</span>,
        <br/>&nbsp;&nbsp;<span class="string">"interests"</span>: [<span class="string">"Web Development"</span>, <span class="string">"UI/UX Design"</span>, <span class="string">"Open Source"</span>, <span class="string">"Tech Innovation"</span>]
      <br/>};
    `;
  },

  skills: () => {
    return `
      <span class="keyword">const</span> <span class="variable">skills</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"languages"</span>: [<span class="string">"JavaScript"</span>, <span class="string">"HTML"</span>, <span class="string">"CSS"</span>, <span class="string">"Python"</span>, <span class="string">"SQL"</span>],
        <br/>&nbsp;&nbsp;<span class="string">"frameworks"</span>: [<span class="string">"React"</span>, <span class="string">"Node.js"</span>, <span class="string">"Express"</span>, <span class="string">"Vue.js"</span>, <span class="string">"Django"</span>],
        <br/>&nbsp;&nbsp;<span class="string">"tools"</span>: [<span class="string">"Git"</span>, <span class="string">"Docker"</span>, <span class="string">"Webpack"</span>, <span class="string">"VS Code"</span>, <span class="string">"Jest"</span>],
        <br/>&nbsp;&nbsp;<span class="string">"databases"</span>: [<span class="string">"MongoDB"</span>, <span class="string">"MySQL"</span>, <span class="string">"PostgreSQL"</span>, <span class="string">"Firebase"</span>],
        <br/>&nbsp;&nbsp;<span class="string">"other"</span>: [<span class="string">"RESTful APIs"</span>, <span class="string">"GraphQL"</span>, <span class="string">"Responsive Design"</span>, <span class="string">"CI/CD"</span>]
      <br/>};
    `;
  },

  projects: () => {
    return `
      <span class="keyword">const</span> <span class="variable">projects</span> = [
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"E-Commerce Platform"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"tech"</span>: [<span class="string">"React"</span>, <span class="string">"Node.js"</span>, <span class="string">"MongoDB"</span>, <span class="string">"Stripe API"</span>],
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"A full-featured e-commerce platform with user authentication, product listing, cart functionality, and payment processing."</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"link"</span>: <span class="string">"https://github.com/johndoe/ecommerce"</span>
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"Task Management App"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"tech"</span>: [<span class="string">"Vue.js"</span>, <span class="string">"Firebase"</span>, <span class="string">"Vuetify"</span>],
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"A collaborative task management application with real-time updates, task assignment, and progress tracking."</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"link"</span>: <span class="string">"https://github.com/johndoe/taskmanager"</span>
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"Weather Dashboard"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"tech"</span>: [<span class="string">"JavaScript"</span>, <span class="string">"OpenWeather API"</span>, <span class="string">"Chart.js"</span>],
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"An interactive weather dashboard showing current conditions and forecasts with data visualization."</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"link"</span>: <span class="string">"https://github.com/johndoe/weather-app"</span>
        <br/>&nbsp;&nbsp;}
      <br/>];
    `;
  },

  contact: () => {
    return `
      <span class="keyword">const</span> <span class="variable">contact</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"email"</span>: <span class="string">"johndoe@example.com"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"phone"</span>: <span class="string">"+1 (555) 123-4567"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"linkedin"</span>: <span class="string">"linkedin.com/in/johndoe"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"github"</span>: <span class="string">"github.com/johndoe"</span>
      <br/>};
      <br/>
      <br/><span class="comment">// Feel free to get in touch! I'm always open to discussing new projects or opportunities.</span>
    `;
  },

  experience: () => {
    return `
      <span class="keyword">const</span> <span class="variable">experience</span> = [
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Senior Frontend Developer"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"Tech Innovations Inc."</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"2020 - Present"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"responsibilities"</span>: [
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"Developed and maintained multiple React applications"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"Implemented responsive design principles"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"Collaborated with UX/UI designers and backend developers"</span>
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;]
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Web Developer"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"Digital Solutions LLC"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"2017 - 2020"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"responsibilities"</span>: [
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"Built full-stack web applications using Node.js and Express"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"Integrated third-party APIs and services"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"Implemented database design and management"</span>
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;]
        <br/>&nbsp;&nbsp;}
      <br/>];
    `;
  },

  education: () => {
    return `
      <span class="keyword">const</span> <span class="variable">education</span> = [
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"degree"</span>: <span class="string">"Master of Science in Computer Science"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"institution"</span>: <span class="string">"University of Technology"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"year"</span>: <span class="number">2017</span>
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"degree"</span>: <span class="string">"Bachelor of Science in Software Engineering"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"institution"</span>: <span class="string">"State University"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"year"</span>: <span class="number">2015</span>
        <br/>&nbsp;&nbsp;}
      <br/>];
    `;
  },

  clear: () => {
    // This command is handled separately in the Terminal component
    return 'CLEAR_TERMINAL';
  },

  social: () => {
    return `
      <span class="keyword">const</span> <span class="variable">socialMedia</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"github"</span>: <span class="string">"github.com/johndoe"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"linkedin"</span>: <span class="string">"linkedin.com/in/johndoe"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"twitter"</span>: <span class="string">"twitter.com/johndoe"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"codepen"</span>: <span class="string">"codepen.io/johndoe"</span>
      <br/>};
    `;
  },

  resume: () => {
    return `
      <span class="comment">// Initiating download of resume.pdf...</span>
      <br/>
      <br/><span class="keyword">function</span> <span class="function">downloadResume</span>() {
      <br/>&nbsp;&nbsp;<span class="keyword">const</span> <span class="variable">link</span> = <span class="string">"https://example.com/johndoe-resume.pdf"</span>;
      <br/>&nbsp;&nbsp;<span class="variable">window</span>.<span class="function">open</span>(link, <span class="string">"_blank"</span>);
      <br/>&nbsp;&nbsp;<span class="keyword">return</span> <span class="string">"Resume downloaded successfully!"</span>;
      <br/>}
      <br/>
      <br/><span class="comment">// Note: This is a simulation. In a real portfolio, you would provide an actual download link.</span>
    `;
  }
};

// Handle command input
export const handleCommand = (input) => {
  const command = input.trim().toLowerCase();
  
  // Check if command exists
  if (commands[command]) {
    const response = commands[command]();
    
    // Special case for clear command
    if (response === 'CLEAR_TERMINAL') {
      return ''; // This is handled in the Terminal component
    }
    
    return response;
  }
  
  // Handle unknown commands
  return `Command not found: ${command}. Type "help" to see available commands.`;
};
