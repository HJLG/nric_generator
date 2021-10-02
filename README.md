# Random NRIC Generator
Contributor : Gerald Hui

<br/>

## Description
Simple web application made with 

    -React
    -Ant Design

<br/>

## Docker/Running the application
Follow the steps to look at the app

    1) Head to https://labs.play-with-docker.com/#
    2) Click on the green "start" button
    3) On the left, click on "ADD NEW INSTANCE"
    4) In the command line, enter 

    docker pull hjlg/nric:updated

    5) Wait for it to finish loading
    6) In the command line, enter

    docker run -p 3030:3000 hjlg/nric:updated

    7) Wait for it to finish loading
    8) At the top of the page there will be an "OPEN PORT" button, click on it and type

    3030

    9) Wait for it to finish loading and use the application

<br/>

## Testing
Unit testing for

    -Checking NRIC generated matches REGEX
    -Button Renders

