function bienvenue() {
    alert('Welcome!');
}

function recherche() {
    alert('Va chercher!');
}
function Container(){
    return(<div className="formul">
                <form ClassName="formulaire">
                    <div ClassName="signIn">
                        <label>
                            S'enregistrer :
                        </label>
                        <input type="submit" value="Allons-y" onClick={bienvenue}/>
                    </div>
                    <div ClassName="recherche">
                        <label>
                            Rechercher :
                        </label>
                        <input type="submit" value="Chercher" onClick={recherche}/>
                    </div>
                </form>
                </div>
            )
}

export default Container