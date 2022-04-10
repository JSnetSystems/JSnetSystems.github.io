---
title: "Checking BPXPRM syntax"
date: 2022-04-09T13:26:39-05:00
author: Jeffrey Smith
draft: false
categories: [ "Mainframe" ]
tags: [ "z/OS", "USS", "BPX" ]
---
#  
#  
A handy operator command to check syntax to a BPXPRMxx parm member. 

After making some mount point changes recenly I issused the command

 >SETOMVS SYNTAXCHECK=(P3)
 
Where P3 is the member in SYS1.PARMLIB that was changed (i.e BPXPRMP3)

IBM link [BPXPRMxx syntax checking](https://www.ibm.com/docs/en/zos/2.1.0?topic=sys1parmlib-checking-bpxprmxx-syntax)

Another useful command 

>D OMVS,MF

Will display information about the last 10 or less mount or move failures
#  
#  
IBM link [Displaying z/OS UNIX Status](https://www.ibm.com/docs/en/zos/2.1.0?topic=command-displaying-zos-unix-system-services-status)