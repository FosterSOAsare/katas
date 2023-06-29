def sum_digits (num) :
    string = str(num)
    sum  = 0
    for i in string : 
      sum += int(i)
    return sum
print(sum_digits(20))
print(sum_digits(167867))
