import Card from "./Card";
export default function BoxUtente() {
    return (
        <Card>
            <div>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eftHaHR7tjaC9dxI1w01uAAAAA%26pid%3DApi&f=1&ipt=c773e2e066b6439bc7969c84bcbde9f2243ba13f637cac62931332d8ac01704f&ipo=images' alt='' />
            </div>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Cognome" />
            <div>
                <button>Accesso Utente</button>
            </div>
        </Card>
    )
}