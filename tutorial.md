# Pysnake tutorial

First, let's clear some questions
- What is PySnake???
- ANSWER: Just a project to show how python will be if it was compiled!
Yea thats it :)

Now let's code in PySnake!!!
Here is a code in it
```
enjoy main() {
  print("Hello world!");
}
```

Now run it and you may see this output:
```
LexToken(ENJOY,'enjoy',2,1)
LexToken(MAIN,'main',2,7)
LexToken(LPAREN,'(',2,11)
LexToken(RPAREN,')',2,12)
LexToken(LBRACE,'{',2,14)
LexToken(ID,'x',3,20)
LexToken(EQUALS,'=',3,22)
LexToken(NUMBER,10,3,24)
LexToken(PLUS,'+',3,27)
LexToken(NUMBER,20,3,29)
LexToken(SEMICOLON,';',3,31)
LexToken(PRINT,'print',4,37)
LexToken(LPAREN,'(',4,42)
LexToken(STRING,'"Hello world"',4,43)
LexToken(RPAREN,')',4,56)
LexToken(SEMICOLON,';',4,57)
LexToken(RBRACE,'}',5,59)
('main', [('print', '"Hello world!"')])
```

Now what is that? The AST lol :)
It is not a error but the "Hello world!" is at-least there!
