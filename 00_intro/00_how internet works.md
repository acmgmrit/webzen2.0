# <center>How Internet Works</center>

## What is internet..?

    Network of neworks is called an internet

## What is a network..?

    Network is a group of computers connected and communicating with each other

## What are the protocols..?

    Consider a group of people talking with each other(A Network of people)

    If one person talks in telugu other in tamil and someother in malayalam is there any chance all the people in that group actually understand what is going on.

    So what will be the solution.. yes introducing universal language which can be understandable all members in a group

    Protocols are the standard rules followed by networked computers in order to avoid confusion

    Computers talk to each other using the TCP/IP Suite

## Difference between Search Engine and Browser

    Browser is an application/software that connects you to the internet

    Search Engine is just a website that takes a keyword and serves you other websites which are somehow related to your keyword

## What is an ip address..?

    again consider the example of a group of people, what if a person what to call a specific person. He has to call him with his name which will be unique for him

    Similarly in internet to identify end devices some ip address is required to identify it

    So we came to know that all devices conncted in network will have an ip address

    Example: 158.254.12.25

## What is an URL

    Uniform Resource Locator
    as it says that unique id to represent a resource in internet

## Main

    Now when you want access the internet first you will open a browser
    (Google Chrome)

    then you will type the url of a website in the browser

    internet doesnot understand the url because it is in plain english language so what will be required, IP address associated with that url

    for that browser first checks it cache if there is any ip address is available with the given URL

    if not found then asks the OS for any IP address is associated with the given URL

    If OS also fail to resolve the ip address then your request is send to your ISP if your ISP also not has the IP address for given URL then ISP asks a DNS Server for IP address

    then this IP adress is sent back to the browser, with this IP Address we reach that respective server in the internet

## After Reaching the Server

    Browser make request to the server to provide data
    Server responds with a response
    This is called request response cycle

    Web Mostly follows client-server architecture
    Web uses HTTP protocol to communicate

    Each request - response cycle is new for the server
    Server don't know whether the old and present request coming from the same source or different source

    So we can call HTTP as a stateless protocol

## GET Vs POST (HTTP Verbs)

    GET: Asks Data from the server
    POST: Sends data to the server

## Getting index.html

    initially browser makes HTTP GET request to the index.html file
    So server sends the index.html file

## How associated files to index file are loaded

    index.html file alone is not sufficient display the complete website
    when index file is received by the browser, it scans the index file and again asks the server to serve the linked files like css and js files

## What is AJAX


## What is website/webpage

    Thoose are just files stored on computers that a piece of software called web server

    Hosting companies provide space on a server for your website