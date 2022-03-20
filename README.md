#########################################################################################
### Pasupathi Rajamanickam created this! I made some changes to get it to work for ME ###
#########################################################################################

The changes I made and why:

Changed the manifest to v3 in order to use a backround service worker to get the tabID.
Why? Because I believe most issues people are because the there is a known bug getting the active tab id from the devpanel and requires a background service worker so I added one. There is also a bug with getting the tab ID from a service worker.....so that's why there is a settimeout() in there. Don't ask.....

I am not good with Javscript so please understand there are most likely better ways do accomplish everything I did. Plus I guess I ran into two BUGS with Chrome so a combonation of things that SHOULD work but don't and my limited experience with JS made this....interesting but it appears to be working.

### NEW USAGE ###

With the changes I made, you can have the devtools panel open and it will work for ANY tab, not just the tab that you are inspecting.
If you are using multiple WINDOWS of chrome, you MUST have at least TWO windows open in the tab you want to use the Respone Override. I think this is because I am using chrome.tabs.onActivated so you can't "unactivate" one tab. I'm assuming you can have two active tabs but one for each window open so....have two tabs open. 

I have error handling (kind of) in the event the tabid being returned is undefined or null. It'll just throw an alert on the page and not send a null value to the main function causing more errors. 


###############

# chrome-response-override
Chrome devtools extension to modify response on the fly, no external app installation required.

Provide support to override API/HTML/* response using simple Find & Replace steps. No external app installation required.

Steps to override response body in chrome extension

1) Open devtools, navigate to "Response Override" tab 
2) Click "Add Row"
3) Enter URL contains value only this URL response will be modified. If you want to modify URL in home page like www.example.com and no URI Path, use Special variable called `~NO_URI~` in URL contains field.
4) Enter Find value It's a javascript regex pattern. 
5) Enter Replace value to replace with. No need to provide content-type
6) Click "Save" to save everything.
7) Click "Play" button to start modifying response.
8) You must click pause button to stop this modification.
9) You must keep this devtools open
10) Issue with the override, either open private tab with only this plugin enabled in private tab or please try disabling other plugins working with network, like request header modifier and run this plugin again. If the other plugins using old network API may affect this plugin

Ex. 
If you want to add new node in json. 
Find: "existingNode":"existingValue" 
Replace: "existingNode":"existingValue", "newNode": "newValue"

If you want to modify URL in home page like on www.example.com page and no URI Path, use Special variable called `~NO_URI~` in URL contains field.

Special Variable
1. If you put `~NO_API~` in Find, no remote call will be made, provide full response. Provide content-type in this case.
2. If you want to modify URL in home page like on www.example.com page and no URI Path, use Special variable called `~NO_URI~` in URL contains field.

How This works: This devtools extension add network break point and listen to URL contains the user input Make API Client call and get response. Do Find and Replace on top of response. Serve the replaced response.

Project space: https://github.com/Pasupathi-Rajamanickam/chrome-response-override

## Contribution
### PR/Issues are welcome. 
1. Please refer <a href="https://github.com/Pasupathi-Rajamanickam/chrome-response-override/projects">Project space</a> to see if we have any ToDo items. 
2. Need clarification? Create an issue with card link.
