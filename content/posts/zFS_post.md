---
title: "zFS_post"
date: 2022-01-08T13:16:42-05:00
draft: false
categories: [ "Mainframe" ]
tags: [ "z/OS", "USS", "IDCAMS", "PAX" ]

---

## zFS aggregate

Needed to increase the size of a zFS mounted dataset the other day. I will just provide the link to IBM website for the details but instead of duplicating everthing here, but I wasn't aware this could be done with the pax command instead of the DFSMS REPRO command.

IBM link {{< link "https://www.ibm.com/docs/en/zos/2.4.0?topic=iscma-copying-each-file-directory-aggregate-larger-data-set" LARGER>}}

>Snippet example from the IBM site

//SYSTSIN  DD  *

OSHELL /usr/sbin/mount -t ZFS -f PLEX.OLD.AGGR002.LDS0002           +

 /service2                                                        ; +

  /usr/sbin/mount -t ZFS -f PLEX.NEW.AGGR002.LDS0002 /service3    ; +

  cd /service2                                                    ; +

  pax -rwvCMX -p eW . /service3                                   ;

/*
