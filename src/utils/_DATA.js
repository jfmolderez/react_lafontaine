const fables = require('./fables.json')

// source : LaFontaine/fables_1_12.json
const textes = {
    la_cigale_et_la_fourmi: 
        "La cigale ayant chanté\nTout l'été,\nSe trouva fort dépourvue\nQuand la bise fut venue.\nPas un seul petit morceau\nDe mouche ou de vermisseau.\nElle alla crier famine\nChez la Fourmi sa voisine,\nLa priant de lui prêter\nQuelque grain pour subsister\nJusqu'à la saison nouvelle.\nJe vous paierai, lui dit-elle,\nAvant l’août, foi d'animal,\nIntérêt et principal.\nLa Fourmi n'est pas prêteuse,\nC'est là son moindre défaut.\nQue faisiez-vous au temps chaud ?\nDit-elle à cette emprunteuse.\nNuit et jour à tout venant,\nJe chantais, ne vous déplaise.\nVous chantiez ? j'en suis fort aise,\nEh bien! dansez maintenant."
    ,
    le_corbeau_et_le_renard: "Maître Corbeau sur un arbre perché,\nTenait en son bec un fromage.\nMaître Renard par l’odeur alléché\nLui tint à peu près ce langage :\nEt bonjour, Monsieur du Corbeau.\n\nQue vous êtes joli ! que vous me semblez beau !\nSans mentir, si votre ramage\nSe rapporte à votre plumage,\nVous êtes le Phenix des hôtes de ces bois.\nÀ ces mots le Corbeau ne se sent pas de joie :\nEt pour montrer sa belle voix,\nIl ouvre un large bec, laisse tomber sa proie.\nLe Renard s’en saisit, et dit : Mon bon Monsieur,\nApprenez que tout flatteur\nVit aux dépens de celui qui l’écoute.\nCette leçon vaut bien un fromage sans doute.\nLe Corbeau honteux et confus\nJura, mais un peu tard, qu’on ne l’y prendrait plus."
    ,
    la_grenouille_qui_veut_se_faire_aussi_grosse_que_le_boeuf: "Une Grenouille vit un Bœuf,\nQui lui sembla de belle taille.\nElle qui n’était pas grosse en tout comme un œuf,\nEnvieuse s’étend, et s’enfle et se travaille,\nPour égaler l’animal en grosseur ;\nDisant : Regardez bien, ma sœur,\nEst-ce assez ? dites-moi ? n’y suis-je point encore ?\nNenni. M’y voici donc ? Point du tout. M’y voilà ?\nVous n’en approchez point. La chétive pécore\nS’enfla si bien qu’elle creva.\nLe monde est plein de gens qui ne sont pas plus sages :\nTout Bourgeois veut bâtir comme les grands Seigneurs ;\nTout petit Prince a des Ambassadeurs :\nTout Marquis veut avoir des Pages."
    ,
    les_deux_mulets: "Deux Mulets cheminaient ; l’un d’avoine chargé :\nL’autre portant l’argent de la Gabelle.\nCelui-ci glorieux d’une charge si belle,\nN’eût voulu pour beaucoup en être soulagé.\nIl marchait d’un pas relevé,\nEt faisait sonner sa sonnette :\nQuand l’ennemi se présentant,\nComme il en voulait à l’argent,\nSur le Mulet du fisc une troupe se jette,\nLe saisit au frein, et l’arrête.\nLe Mulet en se défendant,\nSe sent percer de coups, il gémit, il soupire.\nEst-ce donc là, dit-il, ce qu’on m’avait promis ?\nCe Mulet qui me suit, du danger se retire,\nEt moi j’y tombe, et je péris.\nAmi, lui dit son camarade,\nIl n’est pas toujours bon d’avoir un haut Emploi.\nSi tu n’avais servi qu’un Meunier, comme moi,\nTu ne serais pas si malade."
    ,
    le_loup_et_le_chien: "Un Loup n’avait que les os et la peau,\nTant les Chiens faisaient bonne garde.\nCe Loup rencontre un Dogue aussi puissant que beau ;\nGras, poli, qui s’était fourvoyé par mégarde.\nL’attaquer, le mettre en quartiers,\nSire Loup l’eût fait volontiers.\nMais il fallait livrer bataille ;\nEt le Mâtin était de taille\nA se défendre hardiment.\nLe Loup donc l’aborde humblement,\nEntre en propos, et lui fait compliment\nSur son embonpoint qu’il admire :\nIl ne tiendra qu’à vous, beau Sire,\nD’être aussi gras que moi, lui repartit le Chien.\nQuittez les bois, vous ferez bien :\nVos pareils y sont misérables,\nCancres, hères, et pauvres diables,\nDont la condition est de mourir de faim.\nCar quoi ? Rien d’assuré ; point de franche lippée ;\nTout à la pointe de l’épée.\nSuivez-moi ; vous aurez bien un meilleur destin.\nLe Loup reprit : Que me faudra-t-il faire ?\nPresque rien, dit le Chien, donner la chasse aux gens\nPortants bâtons, et mendiants ;\nFlatter ceux du logis ; à son Maître complaire ;\nMoyennant quoi votre salaire\nSera force reliefs de toutes les façons ;\nOs de poulets, os de pigeons :\nSans parler de mainte caresse.\nLe Loup déjà se forge une félicité\nQui le fait pleurer de tendresse.\nChemin faisant il vit le col du Chien pelé.\nQu’est-ce là, lui dit-il ? Rien. Quoi rien ? Peu de chose.\nMais encor ? Le collier dont je suis attaché\nDe ce que vous voyez est peut-être la cause.\nAttaché ? dit le Loup, vous ne courez donc pas\nOù vous voulez ? Pas toujours ; mais qu’importe ?\nIl importe si bien, que de tous vos repas\nJe ne veux en aucune sorte ;\nEt ne voudrais pas même à ce prix un trésor.\nCela dit, Maître Loup s’enfuit, et court encore."
    ,
}

export function _getTextes() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...textes}), 1000)
    })
}

export function _getFables() {
    const selected = Object.keys(textes)
    const initialValue = {}
    initialValue[selected[0]] = fables[selected[0]]
    const selectedFables = Object.keys(fables)
        .filter(key => selected.includes(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: fables[key]
            }
        }, initialValue)
    return new Promise((res, rej) => {
        setTimeout(() => res({...selectedFables}), 1000)
    })
}

 