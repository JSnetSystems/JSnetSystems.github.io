---
title: "OMVS Encoding"
date: 2022-01-08T11:16:56-05:00
author: Jeffrey Smith
draft: false
categories: [ "Mainframe" ]
tags: [ "z/OS", "USS", "Code page" ]

---

## USS - OMVS command

This characters bracket characters [] and others that don't convert to a readable form was driving me crazy.

enter this command when starting a USS session: omvs convert((BPXFX111))

Example, in man pages converts this line:

pax Ý-cdEnvz¨Ý-H|-L¨Ý-f archive¨ Ý-o type¨ Ý-s substitute¨ ... Ýpattern ...¨

to this line:

pax [-cdEnvz][-H|-L][-f archive] [-o type] [-s substitute] ... [pattern ...]

much easier to read. :thumbsup:

#  
#  
IBM Link [OMVS command](https://www.ibm.com/docs/en/zos/2.3.0?topic=locales-using-convert-option-omvs-command) 


### Display command

Another command option for readability, while in ishell:

while browsing a file

Command ===>DISPLAY CCSID 1047

The DISPLAY command allows you to view data that would not normally be displayed.

#  
#  
IBM Link [DISPLAY command](https://www.ibm.com/docs/en/zos/2.1.0?topic=commands-display-control-display)


