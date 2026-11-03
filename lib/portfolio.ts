/** Portfolio content from the supplied CV and the owner's project explanations. */
export const profile = {
  name: 'Ammar Alasfoor',
  email: 'ammar.a.asfoor@gmail.com',
  github: 'https://github.com/a-alasfoor',
  linkedin: 'https://www.linkedin.com/in/a-alasfoor/',
  location: 'Bahrain',
};
export const projects = [
  {
    id: 'econx', number: '01', name: 'ECONX', context: 'Graduation project with iGA',
    summary: 'From spreadsheets to investment intelligence.',
    description: 'A web-based system for company records, financial data, and quarterly reporting, with AI document processing and a database-backed chatbot.',
    stack: ['React', 'TypeScript', 'AWS', 'Amazon Bedrock'],
    details: 'Developed with Bahrain’s Information & eGovernment Authority (iGA) to replace the Statistics Department’s manual Excel-based foreign investment workflow.',
    highlights: [
      { label: 'AI document processing', text: 'Amazon Bedrock extracts assets, liabilities, equity, and revenue from uploaded PDFs and populates the corresponding financial fields.' },
      { label: 'AI chatbot', text: 'Users ask questions about companies and foreign investments. The chatbot retrieves database records and answers using the stored data.' },
      { label: 'My contribution', text: 'Frontend development, backend integration, and AWS services including Lambda, API Gateway, S3, and DynamoDB.' },
      { label: 'Outcome', text: 'Reduced manual data entry, improved information access, and simplified quarterly reporting.' },
    ],
    note: 'Second place, graduation project competition',
    visual: ['Foreign investment', 'Structured intelligence'],
  },
  {
    id: 'sijilat', number: '02', name: 'Sijilat', context: 'MVP at iGA',
    summary: 'Document workflows, made more dependable.',
    description: 'Serverless document processing and validation for the Sijilat MVP.',
    stack: ['Python', 'AWS Lambda', 'SQL'],
    details: 'Developed PDF-to-image conversion and validation functions, wrote backend SQL queries, and contributed to requirements and AWS architecture.',
    visual: ['Document processing', 'Serverless by design'],
  },
  {
    id: 'social-network', number: '03', name: 'Social Network', context: 'Reboot Coding Institute',
    summary: 'Connected, end to end.',
    description: 'Profiles, posts, groups, and events. Session authentication and privacy controls.',
    stack: ['Next.js', 'Go', 'SQLite', 'Docker'],
    details: 'Implemented WebSocket messaging and notifications, managed database migrations, and containerized the frontend and backend.',
    visual: ['People & connections', 'Full-stack engineering'],
  },
];
export const capabilities = [
  { number: '01', name: 'Software engineering', description: 'Interfaces to APIs. Frontend to backend.', tools: 'React, Next.js, TypeScript, Go, Java, REST, GraphQL, SQLite' },
  { number: '02', name: 'Cybersecurity', description: 'A security mindset, from the foundation.', tools: 'Cybersecurity degree, session authentication, privacy controls' },
  { number: '03', name: 'Cloud computing', description: 'Serverless systems, defined in code.', tools: 'AWS Lambda, API Gateway, S3, Cognito, RDS, DynamoDB, CloudFront, CDK' },
  { number: '04', name: 'Applied AI', description: 'From unstructured documents to useful data.', tools: 'Python, Amazon Bedrock, Amazon Textract, PDF processing' },
];
