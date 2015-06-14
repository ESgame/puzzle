'use strict';

level_data = ["U2FsdGVkX19vSG+zwZmvI7qfZQqWZD55czQ5gzi5eQHSVgnSmoOUV3IeZTDepn9voLt5hZD5ADfcwu735+DphL5R/DkZB+bJLI/MbT1L2Z7w16RRRU9uhHT6RLwQJ7BW", "U2FsdGVkX18kW8Rdtl088HCzxrIEUwSps8H/b35/In8hetpMFdqRbg5SPHdP+Gufx+TjsuaQ2oqBT96VSuIwLA==", "U2FsdGVkX1/T9m01id+9HWnKb43JUXd+h1Ah3+o8H3XErLn7RiJBYhUxixJADpPYxPVJAEUk/W04vnXq4DO18g==", "U2FsdGVkX19yIh5/fIpcxbTjFj2TCp1SVYFyovjXTxWlwriWqSI8coyewx8i9Tr7tvn+hKvRz1wkTp7fzJOv/Ub1C5Fy1pvcOFr75YbWlVI=", "U2FsdGVkX19esu4Bfr9ivYX4ta9cJcg7Br6gIsAWXlliBCUIyT8+TOtab9cT6S7b", "U2FsdGVkX1/KH1XHdjBWUsUETg14FZLv94E39tmNOhQu6/Oj8aRtiBJdtJUXiLm17lLH+fz4mvTME1IGuYREtoBAgfV90N+MK4uowX3U2C0=", "U2FsdGVkX18gO7gFG956vo+3QVSo6Kiv0qexhWNSSeLIWWFYvdzFDhJyvJj/MK5rof85WGNNo9weNMfz2ORbYo5aRDbPi/kVepHHfsX5vpFOaz5ZchQbZ/Ab2/i56q7zLqwItu8uwuCfkrBRx5WeFA==", "U2FsdGVkX1+2Qp+8ZAaJWbMyAV/8EQzZRBIzZklhSmcCyS6EveWtNi1OLeo4jlP0sCdopHILyokftsEQK1FpzFzAes4KGW1Ik2l6QhaNaOGd7Y9PcY1kCsrJIkShnbkw", "U2FsdGVkX1/QuL+cGpSkduARK8m8qy01uaVgKUli+wXhi45zLvaY2socXg7Td/YR", "U2FsdGVkX18dBEB8lwiPopVQRqKBGIqjOkH0Uf9bjWCTxnwTM8Mtj47XvVhJ+Pgn9kY/zWu8VajZkmzoVVZY34jgysPWsKxbQUvZ6wXWPeI=", "U2FsdGVkX18day3SD4c8KKMu+CVAQWn2JC3JjoJzwuz8gfRO9AZcpu+ycyxIXnb1gqD7mHLem5AJR1ktgD2HrETp3azWt17FOvxKdbcwY0gfX9pZ4W21LFLqqbiE2SdV", "U2FsdGVkX1+eGkZBD3GCmEJiOAN55gOUEAds6uTkQS9XWFmRBYQ10MOSlmju3qJd+svCQGU8xsXHsppCQaiw+loaY98B5yi+DCb5rjhaEDk=", "U2FsdGVkX1+0DTf579VOzCwyYfsv1Vn5Qc++CLUEfRuPN8GFyTXBk5hbO2eN4BZzVthVs1Zq4877T0y2COnW91s6zKOG8c4qKIvitPEM4zt1afmk3ilA6wdyTrrZkAwPGcgWsPobChR2d/iV9f1ytfsjRZcXQbxbkpaSOTduA49PN3AWrSDewmGbnB4UXCP/", "U2FsdGVkX199DjE/0f/PSur9Y8OwmrN84HqZCsF66/aDQx8i+qUs9NBAY33zKriyclAGg5t++fpig/fzhtQYxVHWgAgKGTAYg3Y/89yg2ufQ5WUGrTtEoYqc5gGLxcj3/xCY94F5JSCZQlcvfqc6M3oMCa9Dv459n+Yq5UgdYTfT3ONHVzXR+19vjdbhXQsrXyG/LSfTxoDFPpu+QXzg2w==", "U2FsdGVkX18X+cEhnMQ7d2/0Aum/TMnHoq3HG5h7JFjMHR5ZiG1TIikHU62itlXShX5+Te5uCI0R4nNHGwp5IrbzmXe0M+9XtSdzBkSOyXypLEGeNq5g3j1/sQQiU6QAwqAn4F0go0w06rQtIveiPj3GzgIcp6YK7l9RAGGAX5OqyTqwD062slAEw84yhn+T", "U2FsdGVkX1/60MDB0IDAtEEnqsv2UkolEm9zNjSsVeYrQ9uByN9TWQfGoX992NJnVhvTL/opzilRvS3xUlkFWQ==", "U2FsdGVkX1/cALaPwVy9W+iGfWWZBKWrzsT3gVwQ9iUDklyiUzURGGArECt2Jm2+c7Qysf1JaR+5dI/nzNQLCp1oZIDeQbrsOttYH5HVMGY=", "U2FsdGVkX196DkFOezYTz+j7mWyZApr2aPZnOMoNqv3dEHRSTh2ko9shpwuGtr8FwjnOtWuG4Cxife+MVJLFcA==", "U2FsdGVkX1/WyLS+G9UNGhZJmpxkeXV9C/DoqvBRQMpSWtWY61v4NeTv16wZGexd7/GeFWsBwGjRl8eyGZ5plys32DUFnwMMKako/Ag8mWPwYaRjG3pgI0cPEzhvdLgB", "U2FsdGVkX19unWWffR4lmx9HMrMdYk25ZGlWp+grj686UsYdyHkkg6cybRcnpML4f1m1vYL4br2O5V75DoHqqnRH8sFtNubzWszd/euRqm3e5SdLtc5vUYOghqp/zmat", "U2FsdGVkX18VUtXmt6gwjG/UXbox7BAtAQjl/A5SJDJmAmUndSn0JL5Sj7HoldZRAV+UBsWuLYPx+1rfpE01QsXsW9LkojA35ppdJzLrmwG+UtPmpyH3p5LPGH+X4Ucx5F45lX/15qsUEH6EYyrSQlpete0858uyJ3xekrc95zw=", "U2FsdGVkX1/gDSIVBhzmAJVxOjRsvliy9XEm7uiFXt4taPd3Q/8oVS3JAVWJXF8X64MAvjdV7815xPfiHMssgHuZ8vsv4MRdRplZImyfdd7Hy7WjtWh0t16X1s848GQbUoUwPFZEOxAgplTIb2qtjFf0PmWPi60j2wDaXehqKWk6/HtgQAWgNLVdJvAcjNT+53S0zrTapxZKwxwC42eduWnAHp7JTZsmX9MOxj8qscM=", "U2FsdGVkX1+FrGk5eZa6H+5xtAUTGu2XcVIEMqlk56jH4wdplkzsIQMTn/kfy+nuepHyMog3YBxipapZk3oW+W4VIt+vMVSp2m3PXrruoK9i1Md7q/yC/2eysAT7bwTo", "U2FsdGVkX19nOgISWF9iYEzeD43FtcH+NB02PcA6YMi7pZHg8hkrV23hKW4kvykKv1Fi4qjuNwz2GrixSPuB3eFq8hm1qRNo4PmNcjcTRBTJ2/jDMPn2AULT89IkBYbciMlIZC3p0/TqqA4hesTSaoIN7CmQhZCGG1/5RWP941ltywKZtez8oKClcVAfszpF9VcjSZZepB2EHObzuNdhORgy0dEvTWZL6MuLU1j/Ll7cd2rxNqbsFSMp7C7OYH79", "U2FsdGVkX18POFqL8mCKgcgh7vzUoccPE1LC+CAPnA7O/Eze25dyuERqClcL/Kx8+JJIxfIwhNU6WJPCvk30VKMwEAYlTHyNwzA0jw4aYqfGHQBaLP9dW2nJbIr6P997KsigZIBwsruD6RR2fZrHsUNP/DdMuNGXtVxAIPajX84=", "U2FsdGVkX19pb5H86mDufYdPlaJE0/elZ5oZojOBOkzMzKMFdeixB5i1Bq6YAKJgRQaSX+sM4f29Aq+NsN8cdXKLTKnbFQmYfQCwqsvlnO6HIZLqoccRLu7qYTc0awhVLt/aP+Tgv+sE/sMQ6oaR7Q==", "U2FsdGVkX18SQXOe3mnSVsk4lnkf5b3Y/iz2GvW54VAp/P+ViUBmvkwWnC6jrjQ48QFf6oDyPZGLmktiDIGkn4i7cmSHBlZuyf3mKkBcouMEiV8ojsJypucxzlDuU+YJEJ6KGVa0gpDryYJmLj83naFqXYi9mCk7cFix7Et6MoY=", "U2FsdGVkX19MI+Z+hjrgVED2JKK31UHqHum5+gnh+IjSsowFHrWYT3Pr8uob5j6R", "U2FsdGVkX1+d3sR5rlEkLNHm3GMpbW1uo50qT/tu7WMNjVrcWo6LZmDR0Qpk0GI19yj0ZFbMWpzeTxrlXmXUVrkGqCyFZ7WsaedBFAzusOJqLGH6Z2tcBwMaJL+G5p7hLl+v3Hx+kRxg5XuQA7KM1tL8Sn7x4ZgKUgCAcORKReS7yO3PsH5QtQi1ZCcBs1q9", "U2FsdGVkX184PAThwb2ksdskeS5MLfwjzASu0D/R0y4EkWxHemdrDcRXqg1NnKiUuHJRRuLHws4QXwxmFV5yxWAKMiFXOg5Fy4ySGflJKUzCUuzxsBeaawtUvJuYCwsMGBGAAjnwwRDCFge4w9wovQ==", "U2FsdGVkX1/8rh9ZXBBIaHS1GboIjFr6TYQCIVtr6ul6ZKbFVXC0Ik+SpQXu9bNJw301RvX7jVypI6qE4AvA+XsfAHaZWdhu1leLb09gnTs=", "U2FsdGVkX180ZERX9Ewgh9fcsT76F8h7OkqdZRvBQP7HYz+f9uMjGHKW8bEFIYLoCzVCd18Q2mlZ/znFJthOWE7RidDXAEboe/qknUVAZ+qy5bavgouHkRp4y+A5cGCRBeeCSkp/iib8J1k+TBZ0cA==", "U2FsdGVkX1/PEW3s4oPoJd6Cb7N+7+qVkEk8lSZyHlXnpR+Mvax6rmlX1i3UwdXFMwTbKeJWj+lQ7HuzVraK06heN83Zl6tiMA8BtpU0XrLGXgHhE63zfGIn/C+YkWWng/nnMXxLzpIEP+k/6Qa4Ag==", "U2FsdGVkX19fQUUu8j/C0hHYsg7evSR96tB9yHEhNO/U48m5l9Ag4jmvdfCAZsZFMeQAaEoCdK4bKlWXpLn6FyJskrmG6eyjJrIUVLiIhQFu82ynInk21nLMUGYlVt1YtIbZE2xYovUoDrYa9aGTzQ==", "U2FsdGVkX19rRi8ofrlFTnaEyY+kwGiMxrGZcdWZen0VflxeAYp5IDE+A5wrlahiPi6gK9g7EtBXFuaG4+mb5wXQRbFxlW+OtF1WhK2EOyHgNOf+ePjZQqcY8swKdHjTtfR+j2JZNhrg1UY6Sq+eSqmjYiz2d8BncXazx6EbyTouCg1pwPVE0ah7QEyOp61t", "U2FsdGVkX18nAWeYK0skcL+ZmhYyo1niNBnvxlScDR+MYE8GXycaRP7y2A2OprStwe4zICGBshLC5w8nfhoY9aGPy4+EgIHP3c1xq2DEcUsmWFaD83BD1jjduS9x1NF/4YSdJXJWIvreF3CSXYLLqjLaCS2Ta7GwEk+F9Ewk2Aee/MNDDNtAu+XfAHsNBEo16LYIKW3F99rExiID7TWBAL59yQZrf1ImStudzoGnCw+26g3blO0TVbkTJdHxGgM2HlY6x1N6Sw00qqaiKC11W2hPegTJL5oJh/QNC+fl/tZLRme8yrnqA6Mw+u+U54lEyB7ba6LjZoG+LAHq3F9Kf7IOTs+8q5JDyvcvppgyRhajDpf5fFhJvIm8k/bu6jKfT+7YyXTnObOHAKKhjIa3kg==", "U2FsdGVkX18m9Sxgxy9H7jsjUDKP8vsBCyAgx4lMSLLFs05tHz8qQWQgRBnGVxxh/PI+p+ohs+x2EbVEW6OLRv46n9+Akg833Y3ZgtYkRKbDUhupjUP1PSGXsoQZCdTFEfnryYSIiRGLsGrCQeD2pw==", "U2FsdGVkX1966XmmvOptqezzn+n5Kt6mYKuv7TFiRN14zT4lbv+XCBgYBerZo0W9W6EIE6c8wHRFNNdL5VW5SGx+qYA3V9GeG0Zj1dAdMDhGMYZ83meRludH6j2hkt5c", "U2FsdGVkX19KXE7wT4GeTLStH98ndaYN4Rem0QLcfDzxqiPS4RswmGTinVnH+C3Lo+NGuNr9OVeEGcUyNO2AlzACrxQgVdIfVKy+GVeunPc=", "U2FsdGVkX1+D49mz02lTtnX7xXAqZwb02Ekn/Dk8A3N6kwZZvGvbdy/dbSaAbqH7XNhXC3+9HT3hgIlTuU8qCPWEURkYpggCWmGfAE+//Qs="];
