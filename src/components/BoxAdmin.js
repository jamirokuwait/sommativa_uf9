import Card from "./Card";
export default function BoxAdmin() {
    return (
        <Card>
            <div>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F1070724.png&f=1&nofb=1&ipt=b33a0cdcddf96e3dd571955e158997c2cb66709417a1b6c7cc43e7bf27409ff7&ipo=images' alt='' />
            </div>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Cognome" />
            <div>
                <button>Accesso Admin</button>
            </div>
        </Card>
    )
}