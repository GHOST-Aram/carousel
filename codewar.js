export class ROT13{
    constructor(){
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
        this.capsAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    #calculateROT13Letter(letter){
        if(typeof letter !== 'string')
            throw TypeError
        if(this.alphabet.includes(letter))//Lowercase charatcer
            return this.alphabet[((this.alphabet.indexOf(letter) + 13) % 26)]
        else    
            return this.capsAlphabet[((this.capsAlphabet.indexOf(letter) + 13) % 26)]
            
    }

    encrypt(text){
        let cyphertext = ''
        for(let index = 0; index < text.length; index ++){
            //Deal with non alaphabet characters
            if(!this.alphabet.includes(text[index].toLowerCase()))
                cyphertext += text[index]
            else{
                cyphertext += this.#calculateROT13Letter(text[index])
            }
        }
        return cyphertext
    }
}
