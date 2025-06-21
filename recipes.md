---
title: Plugins
layout: collection
sub_title: "The plugin is a script with the possibility of expansion and further modification."
image: '/assets/images/Plugins.jpg'
comments: false
---
<!--
<details>
<summary><b>f_00_Void_KDE_plasma_no-kernel.plug</b></summary> -->

```c
# f_00_Void_KDE_plasma_no-kernel.plug
# version="1.0"; revision="-CЕ-1.3"
# Kennel Linux Void outfitted with a KDE-plasma desktop 
# Creation date 27.11.2024; Revision date:27.11.2024
# Copyright Kennel Linux team; License MIT

# build this via terminal commands: build_firstrib_rootfs.sh
# ./build_firstrib_rootfs.sh void default amd64 f_00_Void_KDE_plasma_no-kernel.plug
# Architecture i386 will probably successfully build too as an alternative to amd64

# login is:
# user=spot; passwd=spot

# All the parameters/commandlines can be appropriately changed:
# Simply comment in or comment out till you have what you desire
# or add new packages to the xbps-install lists.
# You can add as many valid commandlines as you want in here.
#
# base system
echo base-minimal ncurses-base \
| xargs -n1 xbps-install -y
echo file mc xterm xauth bash eudev \
| xargs -n1 xbps-install -y
echo shadow wpa_supplicant \
| xargs -n1 xbps-install -y
echo ntfs-3g zstd rsync \
| xargs -n1 xbps-install -y

# set up passwd system
pwconv
grpconv
printf "root\nroot\n" | passwd >/dev/null 2>&1 # Quietly set default root passwd to "root"

# set root to use /bin/bash
usermod --shell /bin/bash root

# Set locale to en_US.UTF-8 
sed -i 's/#en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/default/libc-locales
echo "LANG=en_US.UTF-8" >> /etc/environment
xbps-reconfigure -f glibc-locales

# Set Bash as shell
xbps-alternatives --set bash

## --------------------------------------------------------------------------
## KDE Plasma

echo kde5 kde5-baseapps \
| xargs -n1 xbps-install -Syu
echo aha dmidecode clinfo glxinfo fwupd cryfs encfs libglvnd mesa-dri xf86-video-nouveau \
| xargs -n1 xbps-install -y
echo xdg-user-dirs xdg-utils xtools xorg plasma-wayland-protocols mdadm dbus-elogind-x11 \
| xargs -n1 xbps-install -y
echo vsv jq xf86-input-libinput kdegraphics-thumbnailers ffmpegthumbnailer polkit \
| xargs -n1 xbps-install -y
echo gvfs gvfs-smb gvfs-mtp gvfs-cdda gvfs-afc acpid nano fastfetch gst-plugins-bad1 \
| xargs -n1 xbps-install -y
echo gst-plugins-good1 gst-plugins-ugly1 xbacklight setxkbmap spectacle conky \
| xargs -n1 xbps-install -y
echo git wget curl p7zip ark unzip tar unrar dtrx xinit mpv smplayer vte3 dialog octoxbps \
| xargs -n1 xbps-install -y
echo kde-cli-tools mtools lm_sensors squashfs-tools kcron gufw plasma-firewall kwalletmanager okular \
| xargs -n1 xbps-install -y
echo yad xmessage parted plasma-disks kpmcore mtpaint kolourpaint hddtemp kvantum krdc krdp krfb atool \
| xargs -n1 xbps-install -y
echo zsh zsh-autosuggestions zsh-syntax-highlighting source-highlight fzf fd ripgrep gettext kwrite \
| xargs -n1 xbps-install -y
echo wayland-utils Vulkan-Tools Vulkan-Headers void-artwork isoimagewriter kcolorchooser kcalc mtpfs gptfdisk wmctrl \
| xargs -n1 xbps-install -y
echo dosfstools e2fsprogs btrfs-progs f2fs-tools udisks2 gtk-layer-shell plasma-vault ImageMagick \
| xargs -n1 xbps-install -y
echo kdeconnect kcharselect sweeper filelight gwenview skanlite partitionmanager samba smbclient cifs-utils \
| xargs -n1 xbps-install -y
echo nerd-fonts-symbols-ttf fonts-roboto-ttf font-awesome6 \
| xargs -n1 xbps-install -y

# Build essentials
# xbps-install base-devel make cmake rust cargo go

# xbps-install -Suy void-repo-multilib void-repo-nonfree void-repo-debug void-repo-multilib-nonfree
 
# Browser selection
echo falkon \
| xargs -n1 xbps-install -y

# Fix Fonts 
#
ln -s /usr/share/fontconfig/conf.avail/70-no-bitmaps.conf /etc/fonts/conf.d/
xbps-reconfigure -f fontconfig

# Pipewire volume - alsa-plugins-pulseaudio / libjack-pipewire
echo pipewire wireplumber alsa-utils alsa-pipewire gstreamer1-pipewire paprefs pavucontrol pamixer ffmpeg ffmpegthumbs qpwgraph \
| xargs -n1 xbps-install -y

# symlink pipewire.desktop launcher in /etc/xdg/autostart/
ln -s /usr/share/applications/pipewire.desktop /etc/xdg/autostart/pipewire.desktop
ln -s /usr/share/applications/pipewire-pulse.desktop /etc/xdg/autostart/pipewire-pulse.desktop

mkdir -p /etc/pipewire/pipewire.conf.d
ln -s /usr/share/examples/wireplumber/10-wireplumber.conf /etc/pipewire/pipewire.conf.d/
ln -s /usr/share/examples/pipewire/20-pipewire-pulse.conf /etc/pipewire/pipewire.conf.d/

mkdir -p /etc/alsa/conf.d
ln -s /usr/share/alsa/alsa.conf.d/50-pipewire.conf /etc/alsa/conf.d
ln -s /usr/share/alsa/alsa.conf.d/99-pipewire-default.conf /etc/alsa/conf.d

# for root desktop
# mkdir -p /root/.config/pipewire/pipewire.conf.d 
# ln -s /usr/share/examples/wireplumber/10-wireplumber.conf /root/.config/pipewire/pipewire.conf.d/
# ln -s /usr/share/examples/pipewire/20-pipewire-pulse.conf /root/.config/pipewire/pipewire.conf.d/

# for spot desktop 
mkdir -p /home/spot/.config/pipewire/pipewire.conf.d 
ln -s /usr/share/examples/wireplumber/10-wireplumber.conf /home/spot/.config/pipewire/pipewire.conf.d/
ln -s /usr/share/examples/pipewire/20-pipewire-pulse.conf /home/spot/.config/pipewire/pipewire.conf.d/

# power-profiles-daemon
# powerprofilesctl set power-saver / balanced #change selected profile
# powerprofilesctl #check what mode is being used
# ln -s /etc/sv/power-profiles-daemon /var/service/
# xbps-install -y power-profiles-daemon
# ln -s /etc/sv/power-profiles-daemon /etc/runit/runsvdir/default/power-profiles-daemon

# Notebook Power Saving configuration
# ln -s /etc/sv/tlp /var/service/
echo tlp tlpui tlp-rdw powertop \
| xargs -n1 xbps-install -y
ln -s /etc/sv/tlp /etc/runit/runsvdir/default/tlp

# tlpui
cat <<'EOF' >> /usr/share/applications/tlpui.desktop
[Desktop Entry]
Name=TLP UI
Exec=tlpui
Terminal=false
Type=Application
Icon=tlpui
Comment=Configuration interface
Categories=Settings;HardwareSettings;GTK;
EOF

# Cups print service
echo cups cups-filters cups-pdf samba-cups print-manager system-config-printer \
| xargs -n1 xbps-install -y
ln -s /etc/sv/cupsd /etc/runit/runsvdir/default/cupsd

# Install Network Manager
#
echo NetworkManager \
| xargs -n1 xbps-install -y
ln -s /etc/sv/NetworkManager /etc/runit/runsvdir/default/NetworkManager

# Bluetooth
# bluez bluez-alsa blueman
echo bluez bluez-deprecated libspa-bluetooth \
| xargs -n1 xbps-install -y
ln -s /etc/sv/bluetoothd /etc/runit/runsvdir/default/bluetoothd
usermod -G bluetooth -a spot
 
# Add ~/Startup directory
#
mkdir -p /root/Startup
cat <<'EOF' >> /usr/local/bin/start-up
#!/bin/bash
sleep 3
user_home=$(eval echo ~${SUDO_USER})
ls $user_home/Startup/* | while read J
do
   "$J" &
done
EOF

chmod +x /usr/local/bin/start-up
 
# Setup autologin on tty1
#
##cp -a /etc/X11/xinit/xinitrc /root/.xinitrc
##cp -R /etc/sv/agetty-tty1 /etc/sv/agetty-autologin-tty1
##sed -i 's/GETTY_ARGS.*/GETTY_ARGS="--autologin root --noclear"/' /etc/sv/agetty-autologin-tty1/conf  # editing for autologin root
##touch /etc/sv/agetty-tty1/down

# Arrange to startx in user's .bash_profile (per Arch Wiki)
# Remove this section if not wanting boot straight into X
##touch ~/.bash_profile
##cat <<'AUTOLOGIN' > /etc/profile.d/autologin.sh
# autologin on tty1
##if [ -z "$DISPLAY" ] && [ "$(fgconsole)" -eq 1 ]; then
##exec startx  # remove the exec if you want back to tty1 on exit X

##fi
#AUTOLOGIN

# Get and install autologin fix
#
##cd /etc/sv
##wget https://rockedge.org/kernels/data/XBPS_packages/agetty-autologin-tty1.tar.gz
##tar xvfz agetty-autologin-tty1.tar.gz

# Use agetty-autologin-tty1 instead of agetty-tty1 
##rm -f /etc/runit/runsvdir/default/agetty-tty1
##ln -s /etc/sv/agetty-autologin-tty1 /etc/runit/runsvdir/default/agetty-autologin-tty1

# enable dbus service
# ln -s /etc/sv/dbus /var/service
ln -s /etc/sv/dbus /etc/runit/runsvdir/default/dbus

# Enable ZSH by default 
# chsh -s /bin/zsh root
# sed -i 's/zsh/# zsh/' /root/.bashrc

## autostart firewall Gufw
ln -s /etc/sv/ufw /var/service
# ln -s /etc/sv/ufw /etc/runit/runsvdir/default/ufw

# sddm
# ln -s /etc/sv/sddm /var/service 
ln -s /etc/sv/sddm /etc/runit/runsvdir/default/sddm

# Samba config
rm -f /etc/samba/smb.conf
cat <<'EOF' >> /etc/samba/smb.conf

[global]
workgroup = Workgroup
netbios name = void-live
server string = KLV-Plasma-kde Server
security = user
map to guest = Bad Password
printing = cups
printcap name = cups
load printers = yes
client min protocol = NT1
server min protocol = LANMAN1

[printers]
comment = All Printers
path = /var/spool/samba
browseable = no
guest ok = yes
writable = no
printable = yes

[smbvoid]
path = /home/spot/smbvoid
comment = Shared files
writable = yes

EOF

# SAMBA README.md
cat <<'README' >> /etc/samba/README.md

1. Create a user group:

sudo groupadd -r sambauser

2. Add the user1 to the sambauser group:

sudo gpasswd sambauser -a spot

3. Now create samba share user:

sudo smbpasswd -a spot

New SMB password: <input password >
Retype new SMB password: <repeat password>

README

groupadd -r sambauser
gpasswd sambauser -a spot

## USER CONFIGS: Copy main configs to /etc/skel for all normal users later added
#
xbps-install -y sudo
# Configure system for multi-users
#
cp -af /root/. /etc/skel
mkdir -p /etc/skel/.config /etc/skel/.cache /etc/skel/.local/share
#
# Create user spot and put in wheel group (and more) and give wheel group nopasswd sudo rights
echo '%wheel ALL=(ALL) NOPASSWD: ALL' | (VISUAL="tee -a" visudo) # wheel group added to sudo no password required
useradd -m -G audio,video,wheel,storage -s /bin/bash spot
printf "spot\nspot" | passwd spot >/dev/null 2>&1 # Quietly set default spot passwd to "spot"

# Create /root directories
#
mkdir -p /root/Desktop
mkdir -p /root/Documents
mkdir -p /root/Downloads
mkdir -p /root/Music
#mkdir -p /root/my-applications
mkdir -p /root/Pictures
mkdir -p /root/Public
mkdir -p /root/Startup
mkdir -p /root/Templates
mkdir -p /root/Videos

# Create /home/spot directories
#
mkdir -p /home/spot/Desktop
mkdir -p /home/spot/Documents
mkdir -p /home/spot/Downloads
mkdir -p /home/spot/Music
#mkdir -p /home/spot/my-applications
mkdir -p /home/spot/Pictures
mkdir -p /home/spot/Public
mkdir -p /home/spot/Startup
mkdir -p /home/spot/Templates
mkdir -p /home/spot/Videos

# save2flash
mkdir -p /home/spot/.local/share/applications
cat <<'EOF' >> /home/spot/.local/share/applications/save2flash.desktop
#!/usr/bin/env xdg-open
[Desktop Entry]
Name=save2flash
Comment=save RAM2 to media
Exec=sudo save2flash
Terminal=false
Icon=system-save-session
Type=Application
Categories=Utility;System;Modules;
EOF

# Set permissions
#
chown -R spot:spot /home/spot

# add users to groups and change permissions
#

usermod -a -G audio spot
usermod -a -G video spot
# chmod 755 /
# chmod 755 /bin
# chmod 755 /lib

#### Get KLV custom packages ####
#
# Create and switch to build directory
mkdir -p /root/Build
cd /root/Build

wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/save2flash-1.9_0.noarch.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/Create-xbps-tools-1.2_1.noarch.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/kde-plasma-config-1.0_1.noarch.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/kio-admin-24.08.2_1.x86_64.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/uextract-4.7_1.noarch.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/Conky_toggle_switch-1.0_1.noarch.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/plasma-welcome-6.1_3.x86_64.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/Yradio-Hypr-1.8_1.noarch.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/plasma-applet-weather-widget-3.0_3.x86_64.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/packit-1.0_2.noarch.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/qemu-ready-0.3_1.x86_64.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/gadmin-samba-0.3.2_1.x86_64.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/Termv-1.4_1.x86_64.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/Conky-restart-1.0_2.noarch.xbps
wget -c https://gitlab.com/sofija.p2018/kla-ot2/-/raw/main/KDE-plasma-desktop/ttf-hack-nerd-3.3_1.noarch.xbps

#### Install KLV custom packages ####

# Register and index packages
cd /root
xbps-rindex -a Build/*.xbps

# Install save2flash
xbps-install -y --repository=Build/ save2flash-1.9_0

# xbps tools
xbps-install -y --repository=Build/ Create-xbps-tools-1.2_1

# xbps kde-plasma-config
xbps-install -y --repository=Build/ kde-plasma-config-1.0_1

# xbps kio-admin
xbps-install -y --repository=Build/ kio-admin-24.08.2_1

# xbps uextract
xbps-install -y --repository=Build/ uextract-4.7_1

# xbps Conky_toggle_switch
xbps-install -y --repository=Build/ Conky_toggle_switch-1.0_1

# xbps plasma-welcome
xbps-install -y --repository=Build/ plasma-welcome-6.1_3

# xbps Yradio-Hypr
xbps-install -y --repository=Build/ Yradio-Hypr-1.8_1

# xbps plasma-applet-weather-widget
xbps-install -y --repository=Build/ plasma-applet-weather-widget-3.0_3

# xbps packit
xbps-install -y --repository=Build/ packit-1.0_2

# xbps qemu-ready
xbps-install -y --repository=Build/ qemu-ready-0.3_1

# xbps gadmin-samba
xbps-install -y --repository=Build/ gadmin-samba-0.3.2_1

# xbps Termv
xbps-install -y --repository=Build/ Termv-1.4_1

# xbps Conky-restart
xbps-install -y --repository=Build/ Conky-restart-1.0_2

# xbps ttf-hack-nerd
xbps-install -y --repository=Build/ ttf-hack-nerd-3.3_1

# Set execution permissions recursivly for binaries and scripts
chmod +x -R /usr/local/bin

# Clean Up
#

rm -r /root/Build
rm /var/cache/xbps/*

ln -s /home/spot/.gtkrc-2.0 /root/.gtkrc-2.0
ln -s /home/spot/.config/gtk-3.0 /root/.config/gtk-3.0

# Set permissions
#
chown -R spot:spot /home/spot

#-----------------------------------------------------------------------

## TIMEZONE SETUP
# Etc/UTC
#
current_timezone="Etc/UTC"
ln -sf /usr/share/zoneinfo/${current_timezone} /etc/localtime

# Russian
# ln -sf /usr/share/zoneinfo/Europe/Moscow /etc/localtime  # to install from console
#
# current_timezone="Europe/Moscow"
# ln -sf /usr/share/zoneinfo/${current_timezone} /etc/localtime

#-----------------------------------------------------------------------
echo "desktop build process finished"

desktop build process finished"
ess finished"
"
d process finished"
ess finished"
"
```

