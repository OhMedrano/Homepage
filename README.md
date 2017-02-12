Redoing my home page in vanilla JS


Right now it's using a fake router. I still gotta make a proper one to deal

with the URL changes. ...I'll work on that later.





connect to your local IP address from your phone
you can find your local IP using ip addr command
for example this is mine

    link/ether 14:dd:a9:e8:c1:63 brd ff:ff:ff:ff:ff:ff
    inet <<< *192.168.1.34* >>>/24 brd 192.168.1.255 scope global dynamic eth0
       valid_lft 68469sec preferred_lft 68469sec
    inet6 fe80::16dd:a9ff:fee8:c163/64 scope link 
       valid_lft forever preferred_lft forever

if it doesn't work you have to configure your webserver to listen your network interface not your loopback address