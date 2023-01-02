function cripto() {
    let output = document.querySelector('#outputText');

    document.getElementById('inputText').style.display = 'none';
    document.getElementById('result').style.display = 'inline-block';

    //get value from input

    let input = document.querySelector('#textArea');
    let menssage = input.value;
    let newMessage = "";

    //transform in array

    let listCaracteres = menssage.split('');

    //use for to loop in array

    for (let i = 0; i < listCaracteres.length; i++){
        if (listCaracteres[i] == 'a') {
            listCaracteres[i] = 'ai';
        }

        else if (listCaracteres[i] == 'e') {
            listCaracteres[i] = 'enter';
        }

        else if (listCaracteres[i] == 'i') {
            listCaracteres[i] = 'imes';
        }

        else if (listCaracteres[i] == 'o') {
            listCaracteres[i] = 'ober';
        }

        else if (listCaracteres[i] == 'u') {
            listCaracteres[i] = 'ufat';
        }

        newMessage = newMessage + listCaracteres[i];
    }
    output.value = newMessage;
}

function descripto() {
    let output = document.querySelector('#outputText');
    document.getElementById('inputText').style.display = 'none';
    document.getElementById('result').style.display = 'inline-block';

    //get text on input

    let input = document.querySelector('#textArea');
    let menssage = input.value;

    //decoding text

    menssage = menssage.replaceAll('ai', 'a');
    menssage = menssage.replaceAll('enter', 'e');
    menssage = menssage.replaceAll('imes', 'i');
    menssage = menssage.replaceAll('ober', 'o');
    menssage = menssage.replaceAll('ufat', 'u');

    output.value = menssage;
}

function copy() {
    let output = document.querySelector('#outputText');
    navigator.clipboard.writeText(output.value);
    alert("Seu texto foi copiado com sucesso")
}