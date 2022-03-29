import { App, Plugin } from '@vue/runtime-core';
import { io, ManagerOptions, SocketOptions } from 'socket.io-client';

export const PluginSocketIo = {
  install: (app: App, path: string, opts?: Partial<ManagerOptions & SocketOptions>) => {
    const options: Partial<ManagerOptions & SocketOptions> = {
      auth: {
        token: '123128376172'
      }
    };
    const socket = io(path, { ...options, ...opts });
    app.config.globalProperties.$socket = socket;

    app.provide('socket', socket);
  }
};
