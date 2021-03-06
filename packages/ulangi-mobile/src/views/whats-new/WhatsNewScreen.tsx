/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import * as React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { env } from '../../constants/env';
import { WhatsNewScreenIds } from '../../constants/ids/WhatsNewScreenIds';

export class WhatsNewScreen extends React.Component {
  private renderLoading(): React.ReactElement<any> {
    return <ActivityIndicator style={styles.spinner} size="small" />;
  }

  public render(): React.ReactElement<any> {
    return (
      <View style={styles.screen} testID={WhatsNewScreenIds.SCREEN}>
        <WebView
          source={{ uri: env.SERVER_URL + '/whats-new' }}
          renderLoading={this.renderLoading}
          startInLoadingState={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  spinner: {
    marginVertical: 16,
  },
});
