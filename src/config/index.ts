const createConfig = () => {
  return {
    clientUrl: typeof window !== "undefined" ? window.location.origin : "",
    serviceName: "BSM",
  };
};

export default createConfig();
