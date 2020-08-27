module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://sqncrdtaaxuzai:b12ad094b1ee6bb9788ed1f74300c0db27364a94eec9bb030534569672bf4538@ec2-54-224-124-241.compute-1.amazonaws.com:5432/dbfrmsuk0hevjp",
  TEST_DB_URL:
    process.env.TEST_DATABASE_URL ||
    "postgresql://dunder_mifflin@localhost/noteful-test",
};
