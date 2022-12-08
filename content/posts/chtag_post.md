---
title: "Character Encoding - chtag"
date: 2022-12-06T20:02:48-05:00
author: Jeffrey Smith
draft: false
categories: [ "USS" ]
tags: [ "z/OS", "UNIX", "Python", "code page" ]
---
#
#

I recently installed IBM Z Open Automation Utilities and Python on z/OS and learned a new command I haven't or needed to use before.

The [chtag command](https://www.ibm.com/docs/en/zos/2.5.0?topic=descriptions-chtag-change-file-tag-information) for character encoding for EBCDIC.

After editing some Helloworld.py file using vi editor I recevied the follow error when I try to run the python code.

~~~~
/home/#>python hello.py
SyntaxError: Non-UTF-8 code starting with '\x97' 
~~~~

I needed to change the codeset to IBM-1047 for python to run correctly on USS z/OS.

Before the change:

>/home/#>chtag -p hello.py
>
>m IBM-1047    T=off hello.py

I issued **chtag -tc 1047 hello.py** to correct the issue.

>/home/#>chtag -p hello.py
>
>t IBM-1047    T=on  hello.py

and now the hello.py works as expected.

>/home/#>python hello.py
>
>Hello World!

NOTE: Using the _ls -T_ will provide the same results as the chtag -p command used above

###

Links I used to install ZOAU using pax:

https://www.ibm.com/docs/en/zoau/1.2.x?topic=installing-configuring-zoau


The IBM Open Enterprise SDK Python:

https://www.ibm.com/products/open-enterprise-python-zos

https://www.ibm.com/docs/en/python-zos/3.9?topic=configuration-installing-configuring-pax-edition

