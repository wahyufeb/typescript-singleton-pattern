class Connection {
    private host: string;
    private dbUser: string;
    private dbPassword: string;
    private dbPort: number;

    constructor(host: string, dbUser: string, dbPassword: string, dbPort: number) {
        this.host = host;
        this.dbUser = dbUser;
        this.dbPassword = dbPassword;
        this.dbPort = dbPort;
    }

    sql(query: string) :any{
        // return query to database;
        // for example, we just return query string
        return query;
    }
}

export default Connection;