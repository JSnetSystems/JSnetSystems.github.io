---
title: "zFS Increasing Size"
date: 2022-01-08T13:16:42-05:00
author: Jeffrey Smith
draft: false
categories: [ "Mainframe" ]
tags: [ "z/OS", "USS", "IDCAMS", "PAX" ]

---
#  
#  
Needed to increase the size of a zFS mounted dataset the other day. I will just provide the link to IBM website for the details but instead of duplicating everthing here, but I wasn't aware this could be done with the pax command instead of the DFSMS REPRO command.


>Snippet example from the IBM site

    //SYSTSIN  DD  *
    OSHELL /usr/sbin/mount -t ZFS -f PLEX.OLD.AGGR002.LDS0002           +
     /service2                                                        ; +
      /usr/sbin/mount -t ZFS -f PLEX.NEW.AGGR002.LDS0002 /service3    ; +
      cd /service2                                                    ; +
      pax -rwvCMX -p eW . /service3                                   ;
    /*
  

#         
#  
IBM link [LARGER dataset](https://www.ibm.com/docs/en/zos/2.4.0?topic=iscma-copying-each-file-directory-aggregate-larger-data-set)

