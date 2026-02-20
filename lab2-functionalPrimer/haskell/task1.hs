module Main where

main :: IO ()
main =
    do
    print (myFunc1 5)
    print (myFunc2 10)
    print (myFunc3)

myFunc1 :: Integer -> Integer
myFunc2 :: Integer -> Integer
myFunc3 :: String
myFunc1 x = x*10
myFunc2 x = x*2
myFunc3 = "Hello, this is 3rd Func"