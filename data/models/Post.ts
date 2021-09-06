export class Post {
    id: string | undefined;
    title: string | undefined;
    body: string | undefined;

    fromJson(json: any): Post {
        if (json == null) {
            return this;
        }

        this.id = json.id;
        this.title = json.title;
        this.body = json.body;

        return this;
    }
}
