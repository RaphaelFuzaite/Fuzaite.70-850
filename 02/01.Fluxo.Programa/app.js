var	el = {
		ifelse : document.querySelector("#ifelse"),
		switchcase : document.querySelector("#switch"),
		iterate : document.querySelector("#iterate")
	},
	collection = []
	name = 'Say my name!',
	atividade = {
		status: 4
	};


if (collection.length) {
	el.ifelse.textContent = "COLLECTION LENGTH: " + collection.length;
} else if (name) {
	el.ifelse.textContent = "NAME: " + name;
}

switch (atividade.StatusAtual) {
	case 1:
		el.switchcase.textContent = "Em andamento Interno";
		break;
	case 2:
		el.switchcase.textContent = "Em Andamento Externo";
		break;
	case 3:
		el.switchcase.textContent = "Em Atraso";
		break;
	case 4:
		el.switchcase.textContent = "Concluída";
		break;
	case 5:
		el.switchcase.textContent = "Cancelada";
		break;
	default:
		el.switchcase.textContent = "Não Iniciada";
	break;
}

collection = [1,5,9,"Yoh", new Date, false].slice(0)
collection.forEach(function(index, value) {
	el.iterate.textContent += value + " | ";
});
