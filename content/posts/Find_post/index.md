---
title: "Find Picture String"
date: 2022-01-11T19:15:39-05:00
author: Jeffrey Smith
draft: false
categories: [ "Mainframe" ]
tags: [ "z/OS", "FIND", "SEARCH" ]
---
![Character Encoding for USS](cover_find.jpeg)


A nice option to the find command that comes in handy is the picture string. I like to use it to find error messages in logs for my normal daily health checks.

There are several characters types to choose from. 

While in the SYSLOG or any output you can enter these command examples to find errors.

**Example: Go into the SYSLOG and max to bottom of log**

This example will find any errors starting with the EQQ characters followed by any 4 characters and ending with a letter E going backwards in the SYSLOG.

>COMMAND ===> FIND P'EQQ====E' prev

This example will find any messages starting with HASP followed by any 2 digits and ending with 5. Perhaps not useful but you get the idea.

>COMMAND ===> FIND P'HASP##5' prev


Some other options types to use.

 * Equal-sign (=)         Any character (don't care)                       
 * Not-sign (¬)           Any non-blank character                          
 * Period (.)             Any non-display (invalid) character              
 * Sharp (#)              Any numeric character (digit)                    
 * Minus-sign (-)         Any non-numeric character                        
 * At-sign (@)            Any alphabetic character                         
 * Less-than              Any lower case alphabetic character              
 * Greater-than           Any upper case alphabetic character              
 * Dollar-sign ($)        Any special character                            

  
IBM link [Using picture strings](https://www.ibm.com/docs/en/zos/3.2.0?topic=strings-using-picture)