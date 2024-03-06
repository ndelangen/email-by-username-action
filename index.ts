import { getInput, setFailed, setOutput } from "@actions/core";

async function run() {
  const { Octokit } = await import("@octokit/core");
  try {
    const input = getInput("github-username");
    const token = getInput("token");

    console.log(`[*] Getting ${input}\'s GitHub email`);

    let result = null;
    try {
      const octokit = new Octokit({ auth: `${token}` });
      result = await octokit.request(`GET /users/${input}`, {});
    } catch (error) {
      setFailed(`[!] Failed to request ${input}\'s API page`);
      return;
    }

    if (!result || result.status !== 200 || !result?.data?.email) {
      setFailed(`[!] Failed to get ${input}\'s email`);
      return;
    }

    const email = result.data.email;

    console.log(`[*] Found ${input}\'s email: ${email}`);
    setOutput("email", email);
  } catch (error) {
    setFailed(error as Error);
  }
}

run().catch((error) => setFailed(error as Error));
