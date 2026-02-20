module Intro1 where

-- define named constants:
r1 :: Integer
r1 = 1
r2 :: Double
r2 = b ** 2 + 1 / b where b = 2

-- define a function:
diff :: Num a => a -> a -> a
diff a b = abs (a - b)

r3 :: Integer
r3 = diff (diff a a) a  where a = 1
r4 :: Integer
r4 = diff (diff a b) b  where a = 1; b = 1

-- lists by enumeration
r5 :: [Integer]
r5 = [1,3,4,1]
r6 :: [Integer]
r6 = [1..5]

inc :: Num a => a -> a
inc n = n + 1

r7, r8 :: [Integer]
r9 :: [Double]
r7 = map inc [1..3]
r8 = map (diff 2) [1..3]
r9 = map sqrt [1..3]

r10, r11 :: [(Integer,Double)]
r10 = zip [1..3] (map sqrt [1..3])
r11 = zip [1..3] (map sqrt [1..2])

r12 :: IO ()
r12 = print ([1..3] :: [Integer])

main :: IO ()
main = pure ()