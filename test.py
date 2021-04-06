a=int(input())
b=int(input())
k=int(input())
l=[a,b]
i=2
while(i<k):
    c=sum(l)
    c=c+(l[i-2]^l[i-1])
    l.append(c)
    i=i+1
print(l)

# print(a + b)