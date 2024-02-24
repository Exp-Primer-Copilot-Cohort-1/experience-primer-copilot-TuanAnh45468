function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    description: 'Skills of a member',
    fields: {
      id: {
        type: 'ID',
        description: 'The id of the member'
      },
      name: {
        type: 'String',
        description: 'The name of the member'
      },
      skills: {
        type: '[Skill]',
        description: 'The skills of the member'
      }
    }
  }
}