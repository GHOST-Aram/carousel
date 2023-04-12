import {ROT13} from './codewar.js'

const rot13 = new ROT13()
test('Test basic Sting', () =>{
    expect(rot13.encrypt('Elephant')).toBe('Ryrcunag')
})
test('Test empty string', () =>{
    expect(rot13.encrypt('こんにちは世界')).toBe('こんにちは世界')
})
test('Test empty string', () =>{
    expect(rot13.encrypt('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'))
    .toBe('nopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm')
})
test('Test empty string', () =>{
    expect(rot13.encrypt('!$%&1234')).toBe('!$%&1234')
})

test('Test String with digit characters', () =>{
    expect(rot13.encrypt('Rex18Burnsley')).toBe('Erk18Oheafyrl')
})
test('Test String with space characters', () =>{
    expect(rot13.encrypt('Javascript is going to change me'))
    .toBe('Wninfpevcg vf tbvat gb punatr zr')
})
test('String with Punctuation', ()=>{
    expect(rot13.encrypt('How are you? Is that him!'))
    .toBe('Ubj ner lbh? Vf gung uvz!')
})