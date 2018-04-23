import * as secrets from "./secrets";

export interface IInvite {
  __id: string;
  application: string;
  secret: string;
  timestamp: number;
}

export async function invite(application: string, userIds: string[]) {
  const secret = "abc";

  const row: IInvite = {
    __id: scuttlekit.db.createId("invite"),
    application,
    secret,
    timestamp: Date.now()
  };

  const results = userIds.map(async u => {
    const encryptionKey = await scuttlekit.auth.createKey({
      name: u,
      users: [u]
    });
    return await scuttlekit.db.insert("invite", row, {
      encryptionKey
    });
  });

  return results;
}

export async function listInvites() {
  
}

export async function acceptInvite(invite: IInvite) {

}
