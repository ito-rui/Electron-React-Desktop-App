import { shell } from 'electron';
import type { DarwinMenuItemConstructorOptions } from 'main/types/Menus/menu';

const helpMenu = (): DarwinMenuItemConstructorOptions => {
    return {
        label: 'Help',
        submenu: [
            {
                label: 'Learn More',
                click() {
                    shell.openExternal('https://electronjs.org');
                },
            },
            {
                label: 'Documentation',
                click() {
                    shell.openExternal('https://github.com/electron/electron/tree/main/docs#readme');
                },
            },
            {
                label: 'Community Discussions',
                click() {
                    shell.openExternal('https://www.electronjs.org/community');
                },
            },
            {
                label: 'Search Issues',
                click() {
                    shell.openExternal('https://github.com/electron/electron/issues');
                },
            },
        ],
    };
};

export default helpMenu;
