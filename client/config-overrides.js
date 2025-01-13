module.exports = function override(config) {
    config.output = {
      ...config.output,
      hashFunction: "sha256", // Use a compatible hash function
    };
    return config;
  };
  