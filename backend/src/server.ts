import { app, port, host } from "./app"

app.listen(port, host, null, () => console.log(`Server listening on port: ${port}`))