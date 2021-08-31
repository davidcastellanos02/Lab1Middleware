#!/bin/bash

date +"%D-%R" >> i1Log
curl 192.168.1.68:1111 >> i1Log
date +"%D-%R" >> i2Log
curl 192.168.1.69:1111 >> i2Log

tail -1 i1Log
tail -1 i2Log