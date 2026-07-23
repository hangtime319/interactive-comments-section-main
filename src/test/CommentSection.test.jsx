import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('Interactive comments section', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders the initial comments from the dataset', () => {
    render(<App />);

    expect(screen.getByText(/Impressive!/i)).toBeInTheDocument();
    expect(screen.getByText(/Woah, your project looks awesome!/i)).toBeInTheDocument();
  });

  it('adds a new top-level comment', async () => {
    const user = userEvent.setup();
    render(<App />);

    const textarea = screen.getByPlaceholderText(/add a comment/i);
    await user.type(textarea, 'This is a new test comment');
    await user.click(screen.getByRole('button', { name: /send/i }));

    expect(screen.getByText(/This is a new test comment/i)).toBeInTheDocument();
  });

  it('replies to an existing comment', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: /reply/i })[0]);

    const replyTextareas = screen.getAllByPlaceholderText(/add a comment/i);
    const replyTextarea = replyTextareas[replyTextareas.length - 1];
    await user.type(replyTextarea, 'This is a reply test');
    await user.click(screen.getAllByRole('button', { name: /send/i })[screen.getAllByRole('button', { name: /send/i }).length - 1]);

    expect(screen.getByText(/This is a reply test/i)).toBeInTheDocument();
  });

  it('edits the current user comment', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: /edit/i })[0]);
    const textareas = screen.getAllByRole('textbox');
    const textarea = textareas[0];
    await user.clear(textarea);
    await user.type(textarea, 'Updated comment text');
    await user.click(screen.getByRole('button', { name: /update/i }));

    expect(screen.getByText(/Updated comment text/i)).toBeInTheDocument();
  });

  it('deletes the current user comment', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /delete/i }));
    await user.click(screen.getByRole('button', { name: /yes , delete/i }));

    expect(screen.queryByText(/I couldn't agree more with this/i)).not.toBeInTheDocument();
  });

  it('updates score when user clicks upvote or downvote', async () => {
    const user = userEvent.setup();
    render(<App />);

    const scoreButtons = screen.getAllByRole('button', { name: /upvote/i });
    await user.click(scoreButtons[0]);

    expect(screen.getByText('13')).toBeInTheDocument();

    const downvoteButtons = screen.getAllByRole('button', { name: /downvote/i });
    await user.click(downvoteButtons[0]);

    expect(screen.getByText('12')).toBeInTheDocument();
  });
});
