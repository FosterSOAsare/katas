#  Count the number of consonants in a given string

def consonants (str) : 
    vowels = 'aeiou'
    alp = 'abcdefghijklmnopqrstuvwxyz'
    count = 0
    for i in str :
        if ((i.lower() in alp) and (i.lower() not in vowels)) : 
            count += 1
    return count

def consonants2 (str) : 
    vowels = 'aeiou'
    count = 0
    for i in str :
        if ((i.lower().isalpha()) and (i.lower() not in vowels)) : 
            count += 1
    return count

print(consonants('h^$&^#$&^elLo world'))
print(consonants2('0edA123456789'))