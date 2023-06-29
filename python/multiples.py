# Find the sum of all multiples of n below m

def multiples(n, m) :
    if (n > 0 and m > 0 ) :
      sum = 0
      for i in list(range(0 , m , n)) : 
          sum += i
      return sum
    elif (n == m) : 
      return 0
    else : 
       return 'INVALID'



def multiples2 (n , m) :
    arr = range(n , m , n)
    return sum (arr)

print(multiples(3, 13))
print(multiples(0, 0))
print(multiples(4, -7))
print(multiples2(3 , 13))