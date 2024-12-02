// Mock
import {
  ForControlAuthenticating,
  AuthDetails,
  Permissions,
} from "../../ports/drivens";

const authDetails: AuthDetails = {
  token: "mock-token",
  refreshToken: "mock-refresh-token",
};

const permissionsMock: Permissions = {
  admin: true,
  user: false,
};

export class ControlAuthenticatorStub implements ForControlAuthenticating {
  async getAuthDetails(
    _email: string,
    _password: string
  ): Promise<AuthDetails> {
    return Promise.resolve(authDetails);
  }

  async getPermissions(
    _email: string,
    _password: string
  ): Promise<Permissions> {
    return Promise.resolve(permissionsMock);
  }
}
