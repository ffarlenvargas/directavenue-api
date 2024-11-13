export default () => {
  return {
    databaseConfig: {
      auth: { url: process.env.DATABASE_URL },
    },
  };
};
