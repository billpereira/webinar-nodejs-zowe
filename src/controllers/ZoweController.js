const zowe = require("@zowe/cli");

const profile = {
  host: "192.86.32.91",
  port: "10443",
  user: process.env.MFUSER,
  password: process.env.MFPWD,
  rejectUnauthorized: false,
};

module.exports = {
  list: async (req, res) => {
    const { user } = req.body;
    const session = zowe.ZosmfSession.createBasicZosmfSession(profile);

    const { commandResponse } = await zowe.IssueTso.issueTsoCommand(
      session,
      `fb3`,
      `LU ${user}`
    );
    return res.json(commandResponse);
  },
  resume: async (req, res) => {
    const { user } = req.body;
    const session = zowe.ZosmfSession.createBasicZosmfSession(profile);

    const { commandResponse } = await zowe.IssueTso.issueTsoCommand(
      session,
      `fb3`,
      `ALU ${user} RESUME`
    );
    return res.json(commandResponse);
  },
  revoke: async (req, res) => {
    const { user } = req.body;
    const session = zowe.ZosmfSession.createBasicZosmfSession(profile);

    const { commandResponse } = await zowe.IssueTso.issueTsoCommand(
      session,
      `fb3`,
      `ALU ${user} REVOKE`
    );
    return res.json(commandResponse);
  },
};
