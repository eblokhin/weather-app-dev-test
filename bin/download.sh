#!/bin/bash
mkdir weather-icons
cd weather-icons
curl --remote-name-all -f http://openweathermap.org/img/wn/[01-11]{d,n}@2x.png 
curl --remote-name-all -f http://openweathermap.org/img/wn/50{d,n}@2x.png