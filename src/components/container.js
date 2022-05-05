import { createPortal } from "react-dom";


class Utilisateur  {
    constructor(nom, categorie){
        this.nom = nom;
        this.categorie = categorie;
        this.statut = false;
    }
    register(){
        this.statut = true;
        console.log("utilisateur enregistre");
        console.log(this);
    }
}

let utilisateurs = [    new Utilisateur('vincent', 'Etudiant'),
                        new Utilisateur('samuel', 'Etudiant'),
                        new Utilisateur('ugo', 'Etudiant')
];

function recherche(submitBtn) {
    submitBtn.preventDefault();
    let form = document.getElementById("searchandregisterform");


}


function affichage(nameGuest){
    let utilisateur = utilisateurs.find(element => element.nom == nameGuest.target['guest'].value  &&
    element.categorie == nameGuest.target['categorie'].value);
    nameGuest.preventDefault();
        if (utilisateur != undefined) {
            switch(nameGuest.target["categorie"].value){
                case 'Etudiant':
                    alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes un petit étudiant`);
                    utilisateur.register();
                    break;
                case 'Enseignant permanent':
                    alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes enseignant permanent de l'équipe Polytech Nantes`);
                    utilisateur.register();
                    break;
                case 'Intervenant externe':
                    alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes un intervenant externe `);
                    utilisateur.register();
                    break;
                case 'Intervenant ITII':
                    alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes un intervenant de ITII`);
                    utilisateur.register();
                    break;
                case 'Enseignant Contractuel':
                    alert(`Bienvenue ${nameGuest.target["guest"].value}, vous êtes un enseignant contractuel`);
                    utilisateur.register();
                    break;
            }  
        } else {
            alert("Vous n'êtes pas sur la liste, dehors!");
        }
}

function Container(){
    return(<div className="formul">
                <form id="searchandregisterform" ClassName="formulaire" onSubmit={affichage}>
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