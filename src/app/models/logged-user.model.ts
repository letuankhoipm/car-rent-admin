export class LoggedUser{
    
    id: number;
    name: string;
    fName: string;
    imagePath: string;
    role: string;
    tokenType: string;
    expiresIn: string;
    accessToken: string;

    get token() {
        return `${this.tokenType} ${this.accessToken}`
    }
}