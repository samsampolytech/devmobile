import { createPortal } from "react-dom";

function bienvenue() {
    alert('Welcome!');
}

function recherche() {
    alert('Va chercher!');
}


function affichage(nameGuest){
    nameGuest.preventDefault()
    console.log(nameGuest);
    switch(nameGuest.target["categorie"].value){
        case 'Etudiant':
            alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes un petit étudiant`);
            break;
        case 'Enseignant permanent':
            alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes enseignant permanent de l'équipe Polytech Nantes`);
            break;
        case 'Intervenant externe':
            alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes un intervenant externe `);
            break;
        case 'Intervenant ITII':
            alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes un intervenant de ITII`);
            break;
        case 'Intervenant externe':
            alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes un intervenant externe`);
            break;
    }  
}

function Container(){
    return(<div className="formul">
                <form ClassName="formulaire" onSubmit={affichage}>
                    <div className="nameGuest">
                        <input type="text" name="guest" defaultValue="Votre nom" />
                        <select name="categorie" id="category-select">
                            <option value="">--Please choose an option--</option>
                            <option value="Etudiant">Etudiant</option>
                            <option value="Enseignant permanent">Enseignant Permanent</option>
                            <option value="Enseignant contractuel">Enseignant Contractuel</option>
                            <option value="Intervenant externe">Intervenant externe</option>
                            <option value="Intervenant ITII">Intervenant ITII</option>
                        </select>
                    </div>
                    <div ClassName="signIn">
                        <label>
                            S'enregistrer :
                        </label>
                        <input type="submit" value="Allons-y" />
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