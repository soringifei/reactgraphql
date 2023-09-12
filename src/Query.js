const githubQuery = {
	query: `
  {
    viewer {
      name
      repositories(first: 30) {
        nodes {
          name
          description
          id
          url
        }
      }
    }
  }
`,
};

export default githubQuery;
